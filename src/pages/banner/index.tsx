import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import * as styles from './index.scss'
import {useEffect} from "react";
import {getBanner} from "@/services/api/music";

const MusicBanner: FC = () => {

  useEffect(() => {
    getBanner().then(res => {
      console.log('res',res)
    })
  },[])

  return(
    <PageContainer>
      <div className={styles.wrapper}>
        11111111111
      </div>
    </PageContainer>
    )


}

export default MusicBanner
