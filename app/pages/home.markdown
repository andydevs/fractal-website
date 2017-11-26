# Fractal Generator

A program that generates Julia and Mandelbrot set fractal images.

![Julia Set Image (f(z) = z^2 + c, c = -0.4 + 0.6i)](app/resources/images/fimage.jpg)

# Usage

## Installation (clone and build)

NOTE: Project can only be built on bash-based platforms (so macOS, Linux, or cygwin).

Make sure that you have `make` and `g++` installed. Both of these can be acquired using `apt-get`. Clone the git repository into your local machine using `git clone` and entering the remote repository. You can then build and install using `make install`. This will build the project and install the binary in `/usr/bin`.

## Command line Interface

The program uses CImg option parsing to retrieve command line arguments. To set options, type the name of the option, followed by the value of the option: `$ juliaset -[name] [value] ...`. If the value is a boolean, you can just type the name of the option to set it to true: `$ juliaset -[boolean-option]`. Options do not have to be put in any order.

Here are a list of options:

|    Option     |                                 Description                                 |  Defaults  |
|:-------------:|:---------------------------------------------------------------------------:|:----------:|
|     -cr       | The real component of the complex constant                                  | 0.0        |
|     -ci       | The imaginary component of the complex constant                             | 0.0        |
|     -mbrot    | Generates the mandelbrot set image (overrides -cr and -ci)                  | false      |
|     -imgx     | The width of the image                                                      | 1920       |
|     -imgy     | The height of the image                                                     | 1080       |
|     -zoom     | The zoom scale of the image                                                 | 1.0        |
|     -offx     | The x offset of the image                                                   | 0.0        |
|     -offy     | The y offset of the image                                                   | 0.0        |
|     -rot      | The angle of rotation of the image                                          | 0.0        |
|     -save     | The filename to save to                                                     | jimage.jpg |
|     -cmap     | The colormapping used                                                       | rainbow    |
|     -cmaps    | Lists all of the colormaps and returns                                      | false      |
|     -test     | Generates a 400x300 test image (saved to the savename) for the set colormap | false      |
| -help (or -h) | Prints the help message                                                     | false      |

### Using an XML File

You can also run the fractal generator with an xml file containing all of the information of the fractals being generated to the program, rather than put the info in manually. Just type `fractal -xml [your xml file]` in the command line. To generate a specific fractal in the file, use the `-id` option: `fractal -xml [your xml file] -id [id of image to generate]`. ID's are discussed in the xml definition.

Each fractal image being generated is represented by a `fractal` tag. Fractal files can have multiple `fractal` tags.

```xml
<fractal id="front" save="fractal.jpg">
	<complex real="-0.4" imag="-0.6"/>
	<size width="1920" height="1080"/>
	<transform angle-"30" zoom="2">
		<offset real="-0.4" imag="-0.3"/>
	</transform>
	<colormap type="gradient">
		<start>0x00AA00</start>
		<end>0xFF00FF</end>
	</colormap>
</fractal>
```

Fractal objects must have a `save` attribute defined, which determines the location that the file is to be saved to. Fractal objects can also have an `id` attribute defined. This is used in the `-id` option to select the image to generate. Finally, they can have an `mbrot` attribute, a boolean that is true if the image being generated is the mandelbrot set, but defaults to false.

The complex tag is optional and defaults to 0 + 0i (it is also ignored if the mbrot attribute is set to true). The real component of the complex is set by the real attribute, while the imaginary component is set by the imag attribute. For example, `<complex real="-0.4" imag="-0.6"/>` equals a complex number of -0.4 - 0.6i. These do not have to be both defined, i.e. `<complex real="-0.4"/>` is also valid and equals -0.4 + 0i.

The size tag is required and must define a height and width component, which correspond to the height and width of the image to be generated. `<size width="400" height="300">` sets the image width to 400 and the image height to 300.

The transform component defines the transformation of the image (the zoom, offset, and angle). The angle represented by the attribute `angle` (defaults to 0), and the zoom is represented by the attribute `zoom` (defaults to 1). The offset is represented by a child tag in the transform named offset. It is identical to the complex tag, in that it has `real` and `imag` attributes which define the real and imaginary components of the offset complex.

#### Colormaps

The colormap tag defines the colormap to use when generating the image. This can be defined in one of three ways.

#### Gradient

The gradient type linearly interpolates between two given color values. The gradient requires that a `start` and `end` tag be defined, which color values as integers. These are the start and end color values respectfully.

```xml
<colormap type="gradient">
	<start>0x00AA00</start>
	<end>0xFF00FF</end>
</colormap>
```

#### Rainbow

The rainbow type computes three sinusoidal functions for the red green and blue values of the color, each with it's own phase and frequency. The rainbow type requires `phase` and `freq` components, both of which require `r`, `g`, and `b` attributes which define the red, green, and blue values of both paramters respectfully. These values have defaults, for `phase`, these are all 0, and for `freq`, these are all 1.

```xml
<colormap type="rainbow">
	<phase r="0.2" g="1.5", b="5.4"/>
	<freq r="2" g="1" b="4"/>
</colormap>
```

#### Preset

Finally, you can set a preset colormap instead using the `preset` attribute. The value of the attribute is the name of the preset, and this attribute supercedes all other options, i.e. if the preset is set, the colormap will be set to the preset, and not be defined by any other parameters set.

```xml
<colormap preset="noir"/>
```
