import React from "react";
import "./Section2.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import chart1 from "../../Images/auto.png";
import chart2 from "../../Images/auto.png";
import auto from "../../Images/auto.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Section2 = () => {
  const classes = useStyles();
  return (
    <div className="section2">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={chart1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <p className="cardTitle" gutterBottom variant="h5" component="h2">
              هوش
            </p>
            <p
              className="cardText"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              شرکت آلفاویژن پیشرو در بازار گردانی الگوریتمی و تکنولوژی‌های
              معاملاتی در بازار بورس تهران در حال فعالیت است. تمرکز ما بر ارائه
              راهکارهای هوشمند، سریع و مطمئن جهت اجرای تصمیمات خرید و فروش در
              بازار است.
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={chart2}
            title="Contemplative Reptile"
          />
          <CardContent>
            <p className="cardTitle" gutterBottom variant="h5" component="h2">
              دقت
            </p>
            <p
              className="cardText"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              شرکت آلفاویژن پیشرو در بازار گردانی الگوریتمی و تکنولوژی‌های
              معاملاتی در بازار بورس تهران در حال فعالیت است. تمرکز ما بر ارائه
              راهکارهای هوشمند، سریع و مطمئن جهت اجرای تصمیمات خرید و فروش در
              بازار است.
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={auto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <p className="cardTitle" gutterBottom variant="h5" component="h2">
              سرعت
            </p>
            <p
              className="cardText"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              شرکت آلفاویژن پیشرو در بازار گردانی الگوریتمی و تکنولوژی‌های
              معاملاتی در بازار بورس تهران در حال فعالیت است. تمرکز ما بر ارائه
              راهکارهای هوشمند، سریع و مطمئن جهت اجرای تصمیمات خرید و فروش در
              بازار است.
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Section2;
