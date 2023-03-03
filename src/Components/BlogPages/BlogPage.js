import { CalendarMonthOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Rec from "./rec1.png";

const card = [
  {
    id: 1,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 2,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 3,
    title: "Contrary to popular relief",
    img: "Rec",
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 4,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 5,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 6,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 7,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 8,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
  {
    id: 9,
    title: "Contrary to popular relief",
    img: { Rec },
    body: "lorem ipsum whichh has done with work as a devloper",
  },
];
const BlogPage = () => (
  <>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {card.map((item, i) => (
        <Box>
          <Card
            key={i}
            sx={{ maxWidth: 345, margin: "10px", textAlign: "start" }}
          >
            <CardMedia
              sx={{ height: 140, margin: "5px" }}
              image={Rec}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="body2" sx={{color:"orange"}}>
                <IconButton sx={{color:"orange"}}>
                  <CalendarMonthOutlined/>
                </IconButton>
                12-01-2022
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{color:"orange"}}>Read more </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  </>
);

export default BlogPage;
