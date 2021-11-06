import {  Typography } from '@mui/material';
import {FC,  ReactElement, useMemo}  from 'react';

import BoxLink from '../../Components/BoxLink';
import {Data} from './data.json'
// import dotenv from 'dotenv'
import styler from './styler'
import SvgLogo from '../../Chicotadas-sem-fundo.svg'
const  Welcome: FC = () => {
    const List : ReactElement[] = useMemo(() =>(
        Data.map((item) => (
            <BoxLink key={item.title} link={item.link} title={item.title} />
        ))
    ),[])
    
  return (
      <div style={styler.container}>
        <img src={SvgLogo} alt={'Logo'}  style={styler.logo} />

        <Typography style={styler.title}   >{"Chicotadas Podcast"}</Typography>

        <Typography style={styler.subtitle} >{"Nosso e-mail é chicotadaspodcast@gmail.com. Para nos ouvir e acompanhar:"}</Typography>
     <div style={styler.buttonContainer}> 

        {List}
     </div>
      </div>
  );
}

export default Welcome;
