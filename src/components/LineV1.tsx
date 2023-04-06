import ResizableBox from "../ResizableBox";
import useDemoConfig from "../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

type DailyRevenue = {
    date: Date,
    revenue: number,
}

type Series = {
    label: string,
    data: DailyRevenue[]
}

const data: Series[] = [
    {
        label: 'React Charts',
        data: [
            {
                date: new Date("12-03-23"),
                revenue: 17000,
            }
            // ...
        ]
    },
    {
        label: 'React Query',
        data: [
            {
                date: new Date("12-03-23"),
                revenue: 15000,
            }
            // ...
        ]
    },
    {
        label: 'React Charts',
        data: [
            {
                date: new Date(),
                revenue: 19000,
            }
            // ...
        ]
    },
    {
        label: 'React Query',
        data: [
            {
                date: new Date(),
                revenue: 13000,
            }
            // ...
        ]
    },
]

export default function Line() {
    /*const { data, randomizeData } = useDemoConfig({
    series: 2,
    dataType: "time",
});*/

    const primaryAxis = React.useMemo<
        AxisOptions<DailyRevenue>
    >(
        () => ({
            getValue: (datum) => datum.date as unknown as Date,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<DailyRevenue>[]
    >(
        () => [
            {
                getValue: (datum) => datum.revenue,
            },
        ],
        []
    );

    return (
        <>
            <ResizableBox>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                    }}
                />
            </ResizableBox>
        </>
    );
}