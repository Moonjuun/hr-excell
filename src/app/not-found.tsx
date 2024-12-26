import { Button, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

export default function Custom404() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
          gap: 1,
        }}
      >
        <Typography variant="h5">404</Typography>
        <Typography variant="h5">
          요청하신 페이지를 찾을 수 없습니다.
        </Typography>
        <Link href="/">홈으로 돌아가기</Link>
      </Box>
    </Container>
  );
}
