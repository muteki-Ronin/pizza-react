import { useState } from 'react';

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => (
                    <li
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
