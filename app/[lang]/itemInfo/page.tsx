'use client'

import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useRootStore from '../hooks/useRootStore'

const ItemInfo = () => {
    const {isLoading } = useRootStore().itemStore

    const router = useRouter()

    useEffect(() => {
        router.push(`/itemInfo/1`)
    }, [])
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            Hello world
        </div>
    )
}

export default observer(ItemInfo) 
