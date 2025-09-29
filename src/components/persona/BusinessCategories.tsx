
import { businessCategories } from './personaData';

export const BusinessCategories = () => {
  return (
    <div className="space-y-6">
      {businessCategories.map((category) => (
        <div 
          key={category.title}
          className="border border-[#14303e]/20 bg-white/5 p-6"
        >
          <h3 className="text-xl font-bold mb-3 text-[#14303e]">{category.title}</h3>
          <p className="text-[#14303e]/80 leading-relaxed">{category.description}</p>
        </div>
      ))}
    </div>
  );
};
