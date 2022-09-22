import React, { memo } from "react"

export type TabData = { id: number }
type TabProps = { data: TabData }

const Tab: React.FC<TabProps> = ({ data }) => {
    return (
        <div className="bg-cyan-300 border-2 border-red-400 w-[200px]">
            {data.id}
        </div>
    )
}

export default memo(Tab)
