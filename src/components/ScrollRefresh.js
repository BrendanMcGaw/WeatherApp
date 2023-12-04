import React, { useState } from 'react'

const [refreshing, setRefreshing] = useState(false)

export const ScrollRefresh =
    (() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    },
    [])
