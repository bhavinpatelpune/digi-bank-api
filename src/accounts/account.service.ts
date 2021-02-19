import { Injectable, HttpException } from '@nestjs/common';
import { AccountDetailsDTO } from '../accounts/account_details.dto';

@Injectable()
export class AccountService {
  private readonly accounts: AccountDetailsDTO[] = [];

  findAll(): AccountDetailsDTO[] {
    return this.accounts;
  }

  create(acct: AccountDetailsDTO) {
    this.accounts.push(acct);
  }

  // getAccounts(): Promise<any> {
  //   return new Promise(resolve => {
  //     resolve(this.accounts);
  //   })
  // }
}

// import { Injectable, HttpException } from '@nestjs/common';
// import { BOOKS } from '../mocks/books.mock';

// @Injectable()
// export class BooksService {
//     books = BOOKS;

//     getBooks(): Promise<any> {
//         return new Promise(resolve => {
//             resolve(this.books);
//         });
//     }
//     getBook(bookID): Promise<any> {
//         let id = Number(bookID);
//         return new Promise(resolve => {
//             const book = this.books.find(book => book.id === id);
//             if (!book) {
//                 throw new HttpException('Book does not exist!', 404);
//             }
//             resolve(book);
//         });
//     }
// }
