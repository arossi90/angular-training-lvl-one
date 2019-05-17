import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RandomQuoteService {

    constructor(
        private http: HttpClient,
        private jsonP: Jsonp,
    ) { }

    getRandomQuote(): Observable<Quotes> {
        const api = 'https://en.wikipedia.org/w/api.php';
        let params = new HttpParams();
        params = params.append('action', 'query');
        params = params.append('format', 'json');
        params = params.append('list', 'random');
        params = params.append('origin', '*');

        return this.http.get<Quotes>(api, { params })
            .pipe(
                map((result: any) => {
                    const { query } = result;
                    const [random] = query.random;
                    console.log(result);
                    return {
                        quote: random.title,
                        author: random.id,
                        cat: random.ns

                    };
                }
                )
            );
    }

    /*
    getRandomQuote(): Observable<Quotes> {
        const api = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=JSONP_CALLBACK';
        return this.jsonP.request(api, { method: 'Get' })
            .pipe(
                map(res => res.json()),
                map(result => {
                    console.log(result);
                    return {
                        quote: result.quoteText,
                        author: result.quoteAuthor,
                        cat: result.quoteLink
                    };
                }));
    }
     */
}

export interface Quotes {
    quote: string;
    author: string;
    cat: string;
}

