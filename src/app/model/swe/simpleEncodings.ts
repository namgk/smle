import {AbstractSWE} from './basicTypes';

export abstract class AbstractEncoding extends AbstractSWE {
}

/**
 * Parameters of the XML encoding method
 */
export class XmlEncoding extends AbstractEncoding {
}

/**
 * Parameters of the text encoding method
 */
export class TextEncoding extends AbstractEncoding {
  /**
   * Indicates whether white spaces (i.e. space, tab, CR, LF) should be
   * collapsed with separators when parsing the data stream
   */
  collapseWhiteSpace: boolean = true;
  /**
   * Character used as the decimal separator
   */
  decimalSeperator: string = '.';
  /**
   * Character sequence used as the token separator (i.e. between two successive
   *  values)
   */
  tokenSeperator: string = ';';
  /**
   * Character sequence used as the block separator (i.e. between two successive
   * blocks in the data set. The end of a block is reached once all values from
   * the data tree have been encoded once)
   */
  blockSeperator: string = '@@';
}
