type ResponseError = any;
type getDataProps = {
  qds: null | undefined | Record<string, any>;
  input:
    | null
    | undefined
    | {
        calculatedColumnsDTO: {
          calculatedColumns: never[];
          forceComputeCalculatedColumns: boolean;
        };
        conn: string;
        connectionId: string;
        database: string;
        rows: string;
        schema: string;
        table: string;
      };
};

const getData = async ({
  qds = undefined,
  input = undefined,
}: getDataProps) => {
  try {
    if (qds !== undefined) {
      console.log("TRYING A QDS QUERY");
    }
    if (input !== undefined) {
      console.log("TRYING A REGULAR QUERY");
    }
  } catch (err) {
    return err.response.json();
  }
};
const fakePayload = {
  input: {
    calculatedColumnsDTO: {
      calculatedColumns: [],
      forceComputeCalculatedColumns: false,
    },
    conn: "SF_DEV_ATSCALEOCP_SVC",
    connectionId: "SF_DEV_ATSCALEOCP_SVC",
    database: "SNOWFLAKE_SAMPLE_DATA",
    rows: "10",
    schema: "TPCH_SF1",
    table: "REGION",
  },
  qds: undefined,
};
const checkNull = (arg: any) => {
  if (arg) {
    console.log("Checks out");
  }
  console.log("Does not check out");
};
// getData(fakePayload);
checkNull(null);
