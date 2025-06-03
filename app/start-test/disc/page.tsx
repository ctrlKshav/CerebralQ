"use client";
import { discGroups } from "@/data/tests/disc/questions/discFull";
import { DISCResponseSchema } from "@/schema/disc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DISCTest from '@/components/start-test/tests/disc'
import React from 'react'

export default function TakeTestpage() {
  return (
    <div className="">
      <DISCTest/>
    </div>
  )
}