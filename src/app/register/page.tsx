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
import { useRouter } from "next/navigation";
import Loading from "@/components/common/Loading";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

import { ExcellApi } from "@/api/ExcellApi";

export default function RegisterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [alertFile, setAlertFile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setAlertFile(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handlePostFile = async () => {
    try {
      if (!file) {
        setAlertFile(true);
        return;
      }

      setIsLoading(true);

      const res = await ExcellApi(file);

      if (res) {
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResponsiveContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DropZone
            onClick={() => inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <CloudUploadIcon style={{ fontSize: 50, color: "#3f51b5" }} />
            <Typography variant="body1">Files to upload</Typography>
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              ref={inputRef}
            />
          </DropZone>

          <ButtonWrapper>
            <ResponsiveBoxWrapper>
              <ResponsiveBox>
                <InsertDriveFileIcon style={{ marginRight: 8 }} />
                <Tooltip title={file?.name}>
                  <FileName variant="body1">{file?.name}</FileName>
                </Tooltip>
              </ResponsiveBox>
              <AlertBox>
                {alertFile && <Alert severity="error">파일을 올려주세요</Alert>}
              </AlertBox>
            </ResponsiveBoxWrapper>

            <Button
              sx={{ mb: 4 }}
              style={{
                backgroundColor: "#3399FF",
              }}
              variant="contained"
              onClick={handlePostFile}
            >
              Send
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                데이터 등록이 완료되었습니다.
              </Alert>
            </Snackbar>
          </ButtonWrapper>
        </>
      )}
    </ResponsiveContainer>
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
