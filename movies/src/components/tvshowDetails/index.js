import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getTVshowActors} from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import StarRate from "@mui/icons-material/StarRate";
import SeasonList from "../seasonList";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TVShowDetails = ({ tvShow }) => {  // Don't miss this!
    const { data , error, isLoading, isError } = useQuery(
    ["cast", { id: tvShow.id }],
    getTVshowActors
    );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
    const actors = data;

  return (
      <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
          </Typography>
          <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
          </Paper> 
          <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Cast" sx={chip} color="primary" />
        </li>
        {actors.cast.map((g) => (
            <li key={g.name}>
                <Link to={`/actor/${g.id}`}>
                    <Chip label={g.name} sx={chip} />
                    </Link>
          </li>
        ))}
          </Paper> 
          <Paper component="ul" sx={root}>
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average}`}
        />
              <Chip label={`First air date: ${tvShow.first_air_date}`} />
      </Paper>
          <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Created By" sx={chip} color="primary" />
        </li>
        {tvShow.created_by.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
          </Paper> 
          <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Networks" sx={chip} color="primary" />
        </li>
        {tvShow.networks.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
          </Paper> 
          <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Companies" sx={chip} color="primary" />
        </li>
        {tvShow.production_companies.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
          </Paper>
          <Paper>
          <SeasonList seasons={tvShow.seasons}></SeasonList> 
          </Paper>
    </>
  );
};

export default TVShowDetails;