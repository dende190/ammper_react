import './Table.css';

function Table({titles, contents}) {
  return (
    <div className="content_table">
      <table className="content_table-table">
        <thead>
          <tr>
            {
              titles.map(title => (
                <th>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            contents.map(content => {
              return (
                <tr>
                  {
                    Object.values(content).map(value => (
                      <td>{value}</td>
                    ))
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
