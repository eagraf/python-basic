import * as fb from "bex/fb";
import * as body from "bex/body";
import * as python from "bex/loader/python";
import * as mutators from "bex/mutator";
import * as coverage from "bex/internal/coverage";

fb.init();
const rng = fb.DefaultRNG();

const gen = new fb.Generator("fuzztarget input", rng);
gen
	.addField(new fb.ByteArray("data", 4192, rng))
	.addMutator(new mutators.MutatorInsertUTF8Char(rng, 4192, 0, 128))
	.addMutator(new mutators.MutatorDeleteUTF8Char(rng));

gen.addSensor(new fb.Sensor8BitCounter("8bit", coverage as fb.CoverageModule));

const mod = python.importModule("contrived");

body.Fuzzer(
	"test",
	gen,
	(_input: fb.Generator) => {
		mod.testcontrived(_input.getField("data").value);
	},
	rng,
	"",
	"",
	"",
	1,
	false
);
