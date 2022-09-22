import useResize from "@hooks/resize"
import { useMemo, useRef, useState } from "react"
import Tab, { TabData } from "../Tab"

type TabProps = { maxTabs: number }

const Tabs: React.FC<TabProps> = () => {
    const ref = useRef(null)
    const { width } = useResize(ref)
    const [tabs, setTabs] = useState<TabData[]>([])

    const [visibleBucket, hiddenBucket] = useMemo(() => {
        const tabWidth = 200
        const visible = [] as TabData[]
        const hidden = [] as TabData[]

        tabs.forEach((tab, tabIndex) => {
            const tabPosition = tabWidth * (tabIndex + 1)
            if (tabPosition <= width) {
                visible.push(tab)
            } else {
                hidden.push(tab)
            }
        })

        return [visible, hidden]
    }, [width, tabs])

    function addTab() {
        setTabs([...tabs, { id: tabs.length }])
    }

    return (
        <div>
            <div className="flex flex-wrap bg-red-300" ref={ref}>
                {visibleBucket.map((tab, tabIndex) => (
                    <Tab key={tabIndex} data={tab} />
                ))}
            </div>
            <div>
                <button onClick={addTab}>Add Tab</button>
            </div>
        </div>
    )
}

export default Tabs
