import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useTheme } from "next-themes"; // Importa useTheme de next-themes

const dataLanguaje = [
    { name: 'Javascript', value: 62.3 },
    { name: 'C#', value: 27.1 },
    { name: 'Python', value: 51 },
    { name: 'Typescript', value: 38.5 },
];

const dataWebFrameworksAndTechnologies = [
    { name: 'React', value: 40.8 },
    { name: 'Vue', value: 15.4 },
    { name: 'Blazor', value: 4.9 },
    { name: 'NestJS', value: 5.8 },
    { name: '.Net', value: 16.9 },
];


const dataBase = [
    { name: 'SqlServer', value: 25.3 },
    { name: 'PostgreSql', value: 48.7 },
    { name: 'SQLite', value: 33.1 },
    { name: 'MongoDB', value: 24.8 },
];

const normalizeName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};

interface CustomActiveShapePieChartProps {
    languageName?: string;
}

export const CustomActiveShapePieChart: React.FC<CustomActiveShapePieChartProps> = ({ languageName }) => {
    const { theme } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState<{ name: string; value: number }[]>([]);

    useEffect(() => {
        if (languageName) {
            const normalizedLanguageName = normalizeName(languageName);

            // Busca en dataLanguaje
            const languageIndex = dataLanguaje.findIndex((item) =>
                normalizeName(item.name).includes(normalizedLanguageName),
            );
            if (languageIndex !== -1) {
                setData(dataLanguaje);
                setActiveIndex(languageIndex);
                return;
            }

            // Busca en dataWebFrameworksAndTechnologies
            const frameworkIndex = dataWebFrameworksAndTechnologies.findIndex((item) =>
                normalizeName(item.name).includes(normalizedLanguageName),
            );
            if (frameworkIndex !== -1) {
                setData(dataWebFrameworksAndTechnologies);
                setActiveIndex(frameworkIndex);
                return;
            }

            // Busca en dataBase
            const databaseIndex = dataBase.findIndex((item) =>
                normalizeName(item.name).includes(normalizedLanguageName),
            );
            if (databaseIndex !== -1) {
                setData(dataBase);
                setActiveIndex(databaseIndex);
                return;
            }

            // Si no se encuentra, se usa un conjunto de datos vacío
            setData([]);
        }
    }, [languageName]);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const textColor = theme === "dark" ? "#fff" : "#333";

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={(props: any) => renderActiveShape(props, textColor)}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill={textColor}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    stroke={theme === "dark" ? "#333" : "#fff"}
                    strokeWidth={2}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

const renderActiveShape = (props: any, textColor: string) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        //percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill={textColor}
            >
                <tspan x={ex + (cos >= 0 ? 1 : -1) * 12} dy="-1.2em">  {/* Nombre arriba */}
                    {`${payload.name}`}
                </tspan>
                <tspan x={ex + (cos >= 0 ? 1 : -1) * 12} dy="1.2em">   {/* Valor debajo */}
                    {`${value}%`}
                </tspan>
            </text>
        </g>
    );
};