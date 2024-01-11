import { useState } from "react";
import { Pagination, ListGroup } from "react-bootstrap";
import Listing from "./Listing";

import "./styles/listedBooksStyles.css";

const listings = [
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      edition: 1951,
      contact: 'john.doe@example.com',
      condition: 'Like New',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      edition: 1960,
      contact: 'jane.smith@example.com',
      condition: 'Good',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      edition: 1949,
      contact: 'bob.jones@example.com',
      condition: 'Very Good',
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      edition: 1925,
      contact: 'mary.wilson@example.com',
      condition: 'Like New',
    },
    {
      id: 5,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      edition: 1932,
      contact: 'sam.brown@example.com',
      condition: 'Acceptable',
    },
    {
      id: 6,
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
      edition: 1954,
      contact: 'emma.davis@example.com',
      condition: 'Acceptable',
    },
    {
      id: 7,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      edition: 1813,
      contact: 'chris.evans@example.com',
      condition: 'Like New',
    },
    {
      id: 8,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      edition: 1937,
      contact: 'olivia.white@example.com',
      condition: 'Very Good',
    },
    {
      id: 9,
      title: 'The Shining',
      author: 'Stephen King',
      edition: 1977,
      contact: 'alex.miller@example.com',
      condition: 'Like New',
    },
    {
      id: 10,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      edition: 2003,
      contact: 'michael.jordan@example.com',
      condition: 'Good',
    },
  ];

function ListedBooks(){

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = listings.slice(startIndex, endIndex);

    const totalPages = Math.ceil(listings.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section id="listedBooks-section">
            <div className="listedBooks-container">
                <h3>Books listed by you</h3>

                <div className="listings">
                    {currentItems.map((res) => {
                        return (
                        <ListGroup>
                            <ListGroup.Item className="listing">
                            <Listing
                                id={res.id}
                                title={res.title}
                                author={res.author}
                                edition={res.edition}
                                contact={res.contact}
                                condition={res.condition}
                            />
                            </ListGroup.Item>
                        </ListGroup>
                        );
                    })}

                </div> 

                <div className="pagination-container">
                    <Pagination>
                        {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                        ))}
                    </Pagination>
                </div> 
            </div>
        </section>
    );

}

export default ListedBooks;