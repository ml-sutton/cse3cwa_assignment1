"use client"
import React, { useState, useEffect } from "react";

interface StylizedH1PropTypes {
  text: string;
}

export const StylizedHeader: React.FC<StylizedH1PropTypes> = ({ text }) => {
  return (
    <div className="">
      {text}
    </div>
  )
};
