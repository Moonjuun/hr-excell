"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

const logoStyle = {
  width: "140px",
  height: "auto",
};
declare global {
  interface Window {
    Kakao: any;
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Made By Jun "} {new Date().getFullYear()}
      <br />
      cmoonjun11@gmail.com
    </Typography>
  );
}

export default function Footer2() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { xs: "center", sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
          pt: { xs: 4, sm: 4 },
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
  padding: 0px;
`;

const KakaoButtonWrapper = styled.div`
  display: flex;
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const IconWrapper = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
