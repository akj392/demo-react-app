import { Box, Card } from '@mui/material';
import { RadarChart } from '@mui/x-charts/RadarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from '@mui/material'

export const desktopOS = [
    {
        label: 'Windows',
        value: 72.72,
    },
    {
        label: 'OS X',
        value: 16.38,
    },
    {
        label: 'Linux',
        value: 3.83,
    },
    {
        label: 'Chrome OS',
        value: 2.42,
    },
    {
        label: 'Other',
        value: 4.65,
    },
];

export const mobileOS = [
    {
        label: 'Android',
        value: 70.48,
    },
    {
        label: 'iOS',
        value: 28.8,
    },
    {
        label: 'Other',
        value: 0.71,
    },
];

export const platforms = [
    {
        label: 'Mobile',
        value: 59.12,
    },
    {
        label: 'Desktop',
        value: 40.88,
    },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
        value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
        ...v,
        label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
        value: normalize(v.value, platforms[1].value),
    })),
];

export const valueFormatter = (item) => `${item.value}%`;

const Dashboard = () => {
    return (<>
        <Typography variant="h2" sx={{ minWidth: 200, flex: 1 }} color='text.secondary'>Dashboard Page</Typography>

        <Box sx={
            {
                display: 'flex',
                gap: 3,
                flexDirection: { xs: 'column', md: 'row' },
                // flexDirection: 'row',
                flexWrap: 'wrap',
                // alignItems: 'flex-start'
            }
        }>
            <Card sx={{ flex: 1, p: 3, height: 300 }}>
                <PieChart
                    height={250}
                    series={[
                        {
                            data: mobileAndDesktopOS.slice(0, 5),
                            innerRadius: 50,
                            arcLabel: (params) => params.label ?? '',
                            arcLabelMinAngle: 20,
                            valueFormatter
                        }
                    ]}
                />
            </Card>
            <Card sx={{ flex: 1, p: 3, height: 300 }}>
                <RadarChart
                    height={230}
                    series={[{ label: 'User', data: [120, 98, 86, 99, 85, 65] }]}
                    radar={{
                        metrics: [
                            { name: 'Math', max: 120 },
                            { name: 'Chinese', max: 120 },
                            { name: 'English', max: 120 },
                            { name: 'Geography', max: 120 },
                            { name: 'Physics', max: 120 },
                            { name: 'History', max: 120 },
                        ],
                    }}
                />
            </Card>
        </Box>
    </>
    )
}

export default Dashboard