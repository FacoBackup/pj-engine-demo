import '../styles/globals.css'
import {Button, Fabric, ToolTip} from "@f-ui/core";
import styles from '../styles/Home.module.css'
import {useState} from "react";

function MyApp({Component, pageProps}) {
    const [dark, setDark] = useState(true)
    return (
        <Fabric theme={dark ? 'dark' : "light"} className={styles.wrapper}>
            <Component {...pageProps} />
            <Button className={styles.button} onClick={() => setDark(!dark)}>
                {dark ?
                    <span className="material-icons-round">brightness_3</span>
                    :
                    <span className="material-icons-round">brightness_high</span>}
                <ToolTip content={'Theme'} justify={'start'} align={'middle'}/>
            </Button>
        </Fabric>
    )
}

export default MyApp
