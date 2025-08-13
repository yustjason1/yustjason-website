export default function TimelineItem({ title, date, items = [] }) {

    const renderItem = (item, index) => {
        switch (item.type) {
            case 'text':
                return (
                    <p key={index} className="mb-4" style={{ color: "var(--foreground)" }}>
                        {item.content}
                    </p>
                );

            case 'video':
                return (
                    <div key={index} className="w-full mb-8 mt-8">
                        <video
                            src={item.src}
                            controls
                            loop
                            muted
                            playsInline
                            className={`w-full h-auto rounded-lg shadow-md ${item.className || ''}`}
                        />
                        {item.caption && (
                            <p className="text-sm mt-2 text-center" style={{ color: "var(--muted-foreground)" }}>
                                {item.caption}
                            </p>
                        )}
                    </div>
                );

            case 'list':
                return (
                <ul key={index} className="list-disc list-inside ml-4 mb-4 space-y-2">
                    {item.items.map((listItem, listIndex) => (
                    <li key={listIndex} style={{ color: "var(--foreground)" }}>{listItem}</li>
                    ))}
                </ul>
                );

            default:
                return null;
        }
    };

    return (
        <div className="mb-8" style={{ color: "var(--foreground)" }}>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <h3 className="text-lg mb-2">{date}</h3>
            <div className="flex gap-4">

                {/* Vertical Line */}
                <div className="w-0.5 mt-2" style={{ backgroundColor: "var(--border)" }}></div>

                <div className="flex-1">
                    {items.map((item, index) => renderItem(item, index))}
                </div>

            </div>
        </div>
    );
}