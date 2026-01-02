import { SERVICE_HIGHLIGHTS } from "@/data";

const ServiceHighlights = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {SERVICE_HIGHLIGHTS.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Icon />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm md:text-base">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 md:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceHighlights;
