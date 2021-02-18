import { $, ElementFinder, element, By, $$, ElementArrayFinder } from 'protractor';

export class SearchPageObject {
    public findCruise: ElementFinder;
    public filterDate: ElementFinder;
    public listDates: ElementArrayFinder;
    public listDatesInput: ElementArrayFinder;
    public applyButton: ElementFinder;
    public sailingDates: ElementArrayFinder;

    constructor() {
        this.findCruise = element(By.xpath("//a[text()='Find a Cruise']"));
        this.filterDate = element(By.xpath("(//span[text()='Dates'])[1]"));
        this.listDates = element.all(By.xpath("//input[@id='c27_checkbox1613354515878']/../../../li/div"));
        this.listDatesInput = element.all(By.xpath("//input[@id='c27_checkbox1613354515878']/../../../li/div/input"));
        this.applyButton = element(By.xpath("//a[text()='Apply']"));
        this.sailingDates = element.all(By.xpath("//span[text()='Sailing']/../../../../div[3]"));
    }
}