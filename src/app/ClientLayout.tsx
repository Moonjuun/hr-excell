"use client";
import React, { Suspense, useEffect, useState } from "react";
import { PaletteMode, Grid, Container } from "@mui/material";
import FullAppbar from "@/components/common/FullAppbar";
import Footer2 from "@/components/common/Footer2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

const theme = createTheme();

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    // 토글 후 현재 모드를 로컬 스토리지에 저장
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("colorMode", newMode);
  };

  const toggleColorLight = () => {
    setMode("light");
    localStorage.setItem("colorMode", "light");
  };

  const toggleColorDark = () => {
    setMode("dark");
    localStorage.setItem("colorMode", "dark");
  };

  useEffect(() => {
    // 로컬 스토리지에서 이전에 선택한 모드 불러오기
    const savedMode = localStorage.getItem("colorMode");
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box sx={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Header />
            <Box
              sx={{
                flexGrow: 1,
                overflow: "auto",
                bgcolor: "background.default",
                p: 3,
              }}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
