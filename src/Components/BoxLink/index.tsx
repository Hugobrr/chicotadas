import {FC}  from 'react';
import { Button } from '@mui/material';
import styler from './styler'
export interface Props {
  link: string;
  title: string;
}

const  BoxLink:FC<Props> = ({ link, title }) => {

  return (
    <div>
      <Button style={styler.button} href={link}>
        {title}
      </Button>

    </div>
  );
}

export default BoxLink;
