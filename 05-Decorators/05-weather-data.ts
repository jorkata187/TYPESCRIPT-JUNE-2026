interface Cache {
    lastChecked: Date | undefined;
    data: string[];
}

function cache() {
    let cache: Cache = {
        lastChecked: undefined,
        data: []
    };

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function () {
            const now = new Date();

            if (cache.lastChecked && now.getTime() - cache.lastChecked.getTime() < 5000) {
                console.log('Returning cached data');
                return cache.data;
            }
            const result = originalMethod.call(this);
            cache.data = [...result];
            cache.lastChecked = new Date();

            return result;
        }
    }
}

class MockWeatherDataService {
    private weatherData: string[] = ['Sunny', 'Rainy', 'Cloudy', 'Windy'];

    addWeatherData(data: string) {
        this.weatherData.push(data);
    }

    @cache()
    getWeatherData() {
        return this.weatherData;
    }
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData()); // Fetches new data
console.log(service.getWeatherData()); 
service.addWeatherData('Snowy');
console.log(service.getWeatherData()); 

setTimeout(() => console.log(service.getWeatherData()), 6000);
