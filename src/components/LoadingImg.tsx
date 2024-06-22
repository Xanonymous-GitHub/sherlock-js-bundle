'use client'

import { type FC } from "react"

const LoadingImg: FC = () => {
    return (
        <img
            src={'/loading.gif'}
            alt={'loading'}
            className={"mx-auto d-block"}
            height="75px"
            width="75px"
            loading="lazy"
        />
    )
}

export default LoadingImg
