const FilterCities = () => {
    const cities = [
        {city: 'Tokio', population: 1_000_000},
        {city: 'Moscow', population: 2_000_000},
        {city: 'New York', population: 3_000_000},
        {city: 'Kyiv', population: 4_000_000},
        {city: 'Minsk', population: 5_000_000},
        {city: 'Madrid', population: 6_000_000},
        {city: 'Boston', population: 7_000_000},
    ];

    const filterCities = (props) => {
        const { arr, min_pop, max_pop } = props;
        return arr
            .filter(city => city.population >= min_pop && city.population <= max_pop)
            .map(res => res.city)
            .sort()
    };

    const filteredCities = filterCities({
        arr: cities,
        min_pop: 3_000_000,
        max_pop: 6_000_000,
    });

    console.log(`filtered`, filteredCities);
    
    return (
      <div className="App">
        EmptyComponent
      </div>
    );
};

export default FilterCities;