const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{
            'color': [
                "#FF4136", // Red
                "#FF851B", // Orange
                "#FFDC00", // Yellow
                "#2ECC40", // Green
                "#0074D9", // Blue
                "#001f3f", // Navy
                "#7FDBFF", // Sky Blue
                "#F012BE", // Magenta
                "#B10DC9", // Purple
                "#85144b", // Maroon
                "#39CCCC", // Teal
                "#3D9970", // Olive
                "#2E2E2E", // Dark Gray
                "#AAAAAA", // Gray
                "#F5F5F5", // Light Gray
                "#FF6F61", // Coral
                "#A463F2", // Lavender
                "#FFA07A", // Light Salmon
                "#40E0D0", // Turquoise
                "#C71585", // Medium Violet Red
                "#8B0000", // Dark Red
                "#FFD700", // Gold
                "#FF1493", // Deep Pink
                "#7CFC00", // Lawn Green
                "#4169E1", // Royal Blue
                "#800080", // Purple
                "#008080", // Teal
                "#696969", // Dim Gray
                "#DCDCDC", // Gainsboro
                "#F08080", // Light Coral
                "#DA70D6", // Orchid
                "#FF6347", // Tomato
                "#7B68EE", // Medium Slate Blue
                "#20B2AA", // Light Sea Green
                "#DAA520", // Golden Rod
                "#00CED1", // Dark Turquoise
                "#F4A460", // Sandy Brown
                "#BA55D3", // Medium Orchid
                "#FFC0CB", // Pink
                "#00FA9A", // Medium Spring Green
                "rgb(6,182,212)",
                "rgb(248,113,113)"
            ]
        },
        {
            'background': [
                "#FF4136", // Red
                "#FF851B", // Orange
                "#FFDC00", // Yellow
                "#2ECC40", // Green
                "#0074D9", // Blue
                "#001f3f", // Navy
                "#7FDBFF", // Sky Blue
                "#F012BE", // Magenta
                "#B10DC9", // Purple
                "#85144b", // Maroon
                "#39CCCC", // Teal
                "#3D9970", // Olive
                "#2E2E2E", // Dark Gray
                "#AAAAAA", // Gray
                "#F5F5F5", // Light Gray
                "#FF6F61", // Coral
                "#A463F2", // Lavender
                "#FFA07A", // Light Salmon
                "#40E0D0", // Turquoise
                "#C71585", // Medium Violet Red
                "#8B0000", // Dark Red
                "#FFD700", // Gold
                "#FF1493", // Deep Pink
                "#7CFC00", // Lawn Green
                "#4169E1", // Royal Blue
                "#800080", // Purple
                "#008080", // Teal
                "#696969", // Dim Gray
                "#DCDCDC", // Gainsboro
                "#F08080", // Light Coral
                "#DA70D6", // Orchid
                "#FF6347", // Tomato
                "#7B68EE", // Medium Slate Blue
                "#20B2AA", // Light Sea Green
                "#DAA520", // Golden Rod
                "#00CED1", // Dark Turquoise
                "#F4A460", // Sandy Brown
                "#BA55D3", // Medium Orchid
                "#FFC0CB", // Pink
                "#00FA9A", // Medium Spring Green
                "rgb(6,182,212)",
                "rgb(248,113,113)"
            ]
        }],
        ['link', 'video', 'code-block'],
        ['clean'],
        [{ 'direction': 'rtl' }],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

export default modules