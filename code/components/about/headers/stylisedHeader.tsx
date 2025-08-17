"use client"
import React, { useState, useEffect } from "react";

interface StylizedH1PropTypes {
  text: string;
}

export const StylizedHeader: React.FC<StylizedH1PropTypes> = ({ text }) => {
  return (
    <div className="styled-header-wrapper">
      <h1 className="styled-header-element">
        <span className="layer-1-text">{text}</span>
        <span className="layer-2-text">{text}</span>
        <span className="layer-3-text">{text}</span>
      </h1>
    </div>
  )
};
