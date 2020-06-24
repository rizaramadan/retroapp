export class BoardViewModel {
    public Name: string
    public Description: string

    constructor (name: string, desc: string) {
      this.Name = name
      this.Description = desc
    }
}
