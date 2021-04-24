import {
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import { BenefitCompany } from './DataModel';

const useStyles = makeStyles(() => ({
    commonHeart: {
        fontSize: '0.8rem !important',
        color: 'gray',
    },
    selectedHeart: {
        color: 'red !important',
    },
}));

const HomBenefitCompany: React.FC<BenefitCompany> = (props: BenefitCompany) => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Grid container wrap="nowrap">
                    <Grid container>
                        <Typography className="txt_b txt_20">
                            {props.companyName}
                        </Typography>
                        <Typography className="txt_14">
                            {props.description}
                        </Typography>
                        <Grid>
                            {props.userLike ? (
                                <FavoriteIcon
                                    className={`${classes.commonHeart} ${classes.selectedHeart}`}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    className={classes.commonHeart}
                                />
                            )}
                            <Typography
                                style={{
                                    marginLeft: '0.4rem',
                                    display: 'inline-block',
                                }}
                                className="txt_14 txt_gray1"
                            >
                                {props.totalLike}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <img
                            src={props.thumbNailPath.replace(/.jpg/gi, '.png')}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HomBenefitCompany;
