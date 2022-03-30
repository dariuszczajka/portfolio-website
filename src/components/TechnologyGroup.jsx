import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Technology from './Technology';
import java from "../../assets/java.png";

const TechnologyGroup = (props) => {
    return(
        <>
            <h4>{props.groupName}</h4>
            <Grid>
                {props.technologies.map((technology, index) => {
                    return(
                        <Technology key={index} img={java} title={technology.title}/>
                    )
                })}
            </Grid>
        </>
        )
}

export default TechnologyGroup;