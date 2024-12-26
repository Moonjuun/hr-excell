"use client";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: AttachMoneyIcon,
    change: "+20.1%",
  },
  {
    title: "New Customers",
    value: "1,205",
    icon: PeopleIcon,
    change: "+10.5%",
  },
  {
    title: "Total Orders",
    value: "8,294",
    icon: ShoppingCartIcon,
    change: "+15.3%",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    icon: TrendingUpIcon,
    change: "+2.4%",
  },
];

export default function DashboardPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {stat.change} from last month
                </Typography>
                <stat.icon color="primary" sx={{ fontSize: 40, mt: 2 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
