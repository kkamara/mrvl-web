import React from 'react'

const SearchComicsPage = () => (
  <div className="container">
    <form
      className="card bg-dark"
      action=''
      method='GET'
      onSubmit={() => {}}
    >
      <div className="card-body bg-dark">
        <div className="card-text bg-dark">
          <div className="form-group">
            <input
              onChange={() => {}}
              name='name'
              type="text"
              className="form-control"
              placeholder='Name'
              // value={name}
              style={styles.input}
            />
          </div>
          <div className="form-group">
            <select
              onChange={() => {}}
              name="status"
              className="form-control"
              // value={status}
              style={styles.input}
            >
              <option value="">Please choose a status</option>
              <option value="alive">Alive</option>
              <option value="dead" >Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={() => {}}
              name='species'
              type="text"
              className="form-control"
              placeholder='Species'
              // value={species}
              style={styles.input}
            />
          </div>
          <div className="form-group">
            <input
              onChange={() => {}}
              name='type'
              type="text"
              className="form-control"
              placeholder='Type'
              // value={type}
              style={styles.input}
            />
          </div>
          <div className="form-group">
            <select
              onChange={() => {}}
              name="gender"
              className="form-control"
              // value={gender}
              style={styles.input}
            >
              <option value="">Please choose a gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
)

const styles = {
  input: {
    backgroundColor: '#212529',
    borderColor: '#212529',
    color: '#fff',
  },
}

export default SearchComicsPage
