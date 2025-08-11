export default function TimelineItem({ title, date, description }) {
  return (
    <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <h3 className="text-lg text-muted-foreground mb-2">{date}</h3>
        <div className="flex gap-4">

            {/* Vertical Line */}
            <div className="w-0.5 bg-gray-300 dark:bg-gray-600 mt-2"></div>

            <p className="flex-1 break-all">{description}</p>

        </div>
    </div>
  );
}