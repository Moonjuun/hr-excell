// components/FileUpload.tsx
"use client";
import * as React from "react";
import { useState, useRef, Suspense, lazy } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Container, Button, Alert } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import styles from "styled-components";

import DashboardPage from "@/app/dashboard/page";

export default function Home() {
  return (
    <>
      <DashboardPage />
    </>
  );
}

const ResponsiveContainer = styled(Container)({
  width: "100%",
  "@media (min-width: 768px)": {
    width: "50%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "black",
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const DropZone = styled(Box)({
  border: "2px dashed #3f51b5",
  borderRadius: "4px",
  padding: "50px",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
  width: "80%",
});

const ResponsiveBoxWrapper = styled(Box)({
  width: "100%",
  "@media (min-width: 768px)": {
    width: "60%",
  },
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const ResponsiveBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ececec",
  padding: "10px",
  marginTop: "16px",
});

const FileName = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const ImageWrapper = styled(Box)({
  marginTop: "5px",
  border: "2px solid #ececec",
  borderRadius: "4px",
  padding: "10px",
});

const ButtonWrapper = styles.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const AlertBox = styled(Box)({
  minHeight: "50px",
});
