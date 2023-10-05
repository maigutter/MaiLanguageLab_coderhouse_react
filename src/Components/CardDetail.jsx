import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CardShopDetail({ Name, Category, Description }) {
  return (
    <div className="center">
      <Card sx={{ maxWidth: 465 }}>
        <CardContent className="center">
          <Typography gutterBottom variant="h4" component="div">
            {Name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {Category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Description}
          </Typography>
        </CardContent>
        <CardActions className="center">
          <Button size="medium">Buy</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardShopDetail;
