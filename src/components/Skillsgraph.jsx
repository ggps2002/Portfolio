import React from 'react'

const Skillsgraph = ({ skill }) => {
    const radius = 50; // Increase the radius
    const strokeWidth = 5; // Adjust this value to make the circle thinner
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (skill.percentage / 100) * circumference;
    return (
        <div className='flex w-full justify-between my-10 bg-tertiary flex-wrap p-4 rounded-lg gap-4'>
            <div className='text-[6vh] '>
                <h2>{skill.name}</h2>
            </div>
            <div className="relative" style={{ width: diameter + strokeWidth, height: diameter + strokeWidth }}>
                <svg width={diameter + strokeWidth} height={diameter + strokeWidth} viewBox={`0 0 ${diameter + strokeWidth} ${diameter + strokeWidth}`} className="transform -rotate-90">
                    <circle
                        className="text-white"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        r={radius}
                        cx={(diameter + strokeWidth) / 2}
                        cy={(diameter + strokeWidth) / 2}
                    />
                    <circle
                        className="text-[#915eff]"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        fill="transparent"
                        r={radius}
                        cx={(diameter + strokeWidth) / 2}
                        cy={(diameter + strokeWidth) / 2}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xl font-bold">{skill.percentage}%</div>
                </div>
            </div>
        </div>
    )
}

export default Skillsgraph