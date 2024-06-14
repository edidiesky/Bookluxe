import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: #ffff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background: #f3f3f3;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--grey-1);
    border-radius: 10px;
    transition: all 0.5s;
  }
  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #bdbbbb;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--grey-1);
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: #333;
      }
    }

    .tableWrapper {
      border-collapse: collapse;
      overflow-x: auto;
      border-collapse: collapse;
      table-layout: fixed;
      @media (max-width: 1080px) {
        max-width: 900px;
        min-width: 900px;
      }
      @media (max-width: 780px) {
        max-width: 600px;
        min-width: 600px;
      }

      @media (max-width: 580px) {
        max-width: 600px;
        min-width: 600px;
      }

      thead {
        tr {
          text-align: start;
          z-index: 200;
          text-align: start;
          transition: all 0.4s;
          background-color: #f5f5f5;
          border-radius: 40px;
          padding: 1rem;
          text-transform: uppercase;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          th {
            font-size: 0.8rem;
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1.7rem 1rem;
            font-family: "Proxima_Bold", sans-serif;
          }
        }
      }
      .btn {
        padding: 0.4rem 1.3rem !important;
      }
      tbody {
        tr {
          transition: all 0.5s;
          z-index: 200;
          &:hover {
            background-color: rgba(0, 0, 0, 0.06);
          }
          td {
            text-align: center;
            padding: 1.2rem 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            font-family: "Proxima_SemiBold", sans-serif;

            span {
              &.danger {
                color: #840a0a;
                padding: 0.8rem 1.2rem;
                border-radius: 40px;
                background: #f3efe5;
              }
              &.success {
                color: #28a745;
                padding: 0.8rem 1.2rem;
                border-radius: 40px;
                background: #edffeb;
              }
            }
          }

          .icons {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              font-size: 1.7rem;
              cursor: pointer;
            }
            &:hover {
              background: #ddd;
            }
          }
        }
      }
    }
  }
`;
