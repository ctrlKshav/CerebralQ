import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { nanoid } from "nanoid";

export async function POST(request: NextRequest) {
  try {
    // Create supabase client
    const supabase = await createClient();

    // Verify user authentication
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the form data
    const formData = await request.formData();
    const file = formData.get("avatar") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "File must be an image" },
        { status: 400 }
      );
    }

    // Check file size (5MB max)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }

    // Use a consistent filename for each user (no nanoid needed)
    const fileExtension = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExtension}`;
    const filePath = `user-avatars/${fileName}`;

    // Upload the file to Supabase Storage with upsert: true
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("user-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true, // This will overwrite any existing file
      });

    if (uploadError) {
      console.error("Error uploading file:", uploadError);
      return NextResponse.json(
        { error: "Failed to upload file" },
        { status: 500 }
      );
    }

    // Generate a signed URL for the file since the bucket is private
    const { data, error: signedUrlError } = await supabase.storage
      .from("user-images")
      .createSignedUrl(filePath, 60 * 60 * 24 * 365 * 2); // 2 year expiry
    if (signedUrlError || !data) {
      console.error("Error creating signed URL:", signedUrlError);
      return NextResponse.json(
        { error: "Failed to create access URL" },
        { status: 500 }
      );
    }

    const signedUrl = data.signedUrl;

    // Update the user profile with the new avatar URL
    const { data: userData, error: updateError } = await supabase
      .from("users")
      .update({ profile_image_url: signedUrl })
      .eq("id", user.id)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating user profile:", updateError);
      return NextResponse.json(
        { error: "Failed to update user profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: signedUrl });
  } catch (error) {
    console.error("Unexpected error during file upload:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
