import { motion } from "framer-motion";

const CharacteristicList = ({ items, dotColor = "bg-orange-500", baseDelay = 1.4 }) => (
  <ul className="space-y-5">
    {items.map((item, index) => (
      <motion.li
        key={item.title}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: baseDelay + index * 0.1 }}
        className="flex items-start space-x-3 text-gray-700 dark:text-gray-200"
      >
        <div className={`w-2 h-2 ${dotColor} rounded-full mt-2 flex-shrink-0`} />
        <div className="flex-1">
          <span className="text-sm leading-relaxed font-medium text-gray-800 dark:text-gray-100">
            {item.title}
          </span>
          {item.poem && (
            <p className="text-xs italic text-gray-500 dark:text-gray-400 leading-relaxed mt-2 pl-3 border-l-2 border-gray-200 dark:border-gray-600 whitespace-pre-line">
              {item.poem}
            </p>
          )}
        </div>
      </motion.li>
    ))}
  </ul>
);

export default CharacteristicList;
