export class PbiService {
  public static readonly PBI_TOKEN_KEY = "XMLA_TOKEN";
  public static readonly SERVICE_ACCOUNT_USER = "xmla-service-account";

  constructor() {}

  /**
   * Logs via the class logger and then returns a new NestJs HttpException with the appropriate information.


   */
  private logMarshallErrorToException(error: any): any {}

  /**
   * Handles client originating Axios errors and appropriately maps it as the desired exceptionType
   * Passes through non-axios errors.


   */
  private handleClientAxiosErrors(err: unknown, exceptionType: any) {}
  /**
   * Handles errors from methods using the Auth Service
   * All called auth-service methods in turn communicate via HTTP with KeyCloak
   * The KeyCloak Exception is given as standard to pass the direct PowerBiClient error-message to the FE


   */
  private handleAuthServiceErrors(err: unknown, exceptionType: any) {}

  private async getPbiRestClient(userToken: string) {}

  public async getGroups(userToken: string) {}

  public async getReports(userToken: string) {}

  public async getDatasets(userToken: string) {}

  public async getDatasources(userToken: string, datasetId: string) {}

  public async updateGroupDatasources(
    userToken: string,
    groupId: string,
    datasetId: string,
    update: any
  ) {}

  public async updateDatasources(
    userToken: string,
    datasetId: string,
    update: any
  ) {}

  public async getGroupReports(userToken: string, groupId: string) {}

  public async getGroupDatasets(userToken: string, groupId: string) {}

  public async getGroupDatasources(
    userToken: string,
    groupId: string,
    datasetId: string
  ) {}

  public async generatePbiServiceToken() {}

  public async getPbiServiceToken() {}

  public async deletePbiServiceToken() {}
}

console.log(Reflect.ownKeys(PbiService.prototype));
