import { Fuzzer, FuzzTarget } from "fuzzbuzz";
import { String } from "fuzzbuzz/generator";
import * as python from "fuzzbuzz/lang/python";

const contrived = python.importModule("contrived");

export function FuzzContrived(f: Fuzzer) {

  const body = new String("body");
  body.setMaxLength(4096);

  const target = new FuzzTarget((body: string): void => {

    contrived.testcontrived(body);

  }, body);

  f.addFuzzTarget(target);
}