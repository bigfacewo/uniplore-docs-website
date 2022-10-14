---
sidebar_position: 0
---
### 组件介绍
**“加载文件”（File）**控件主要用于加载实例数据集文件以及用户上传的数据集文件。

<hr/>

- 输入：
  - 无
- 输出：
  - data：数据集

<hr/>

**“加载文件”（File）**控件读取输入数据文件（带数据实例的数据表）并将数据集发送到其输出通道。该控件可以从 Excel（.xlsx）、简单制表符分隔文件、逗号分隔文件（.csv）等不同文件类型中读取数据集。
:::caution
对于csv文件，如果包含中文请使用utf-8格式。
:::

### 页面介绍
点击**“加载文件”（File）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/file/param.png) ](/img/aistudio/io/file/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>标签选项</td> 
      <td>
      样例数据：系统提供的样例数据集，可直接选择加载<br/>
      手动上传：上传自定义数据集<br/>
      URL源：加载在线数据集
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>基本信息</td>    
      <td>
      显示文件中数据集的相关信息，包括数据集大小，属性数目以及属性类型
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>属性列</td>    
      <td>
      显示文件中数据集的属性信息，属性名，属性类型，属性类别
      </td> 
      <td></td>
  </tr>
</table>

:::tip
在加载数据时，该控件会把数据分为四种类型：
* numeric（数值型）
* categorical（离散型）
* text（字符型）
* datetime（日期型）  

也会把属性分为四种类型：
* feature（一般属性，一般为连续型或离散型）
* class/target（分类属性，一般为连续型或离散型）
* meta（元属性，一般为字符型，不用于分类或回归分析）
* skip（忽略该属性，即不加载该属性）  

在加载文件时，当用户想要指定属性的类型以及数据的类型时，可以使用C/c, D/d, S/s, T/t分别表示 numeric（数值型）, categorical（离散型）, text（字符型）, datetime（日期型）  
同时使用 feature/'' 表示 feature（一般属性），class表示class/target（分类属性），meta 表示 meta（元属性），ignore表示忽略的列

如下图所示，设置“sepal length”，“sepal width”，“petal length”，“petal width”为数值型&一般属性，设置“iris”为离散型&分类属性。  
![demo-file](/img/aistudio/io/file/demo-file.png)

:::

### 使用案例
**“加载文件”（File）**控件一般作为一个工作流的开端，加载数据进行相关处理。如下图所示的工作流中 ，使**“加载文件”（File）**控件加载数据，连接**“查看数据”（Data Table）**控件查看数据。  
[ ![](/img/aistudio/io/file/workflow.png) ](/img/aistudio/io/file/workflow.png)

案例中加载样例数据中的 iris 示例数据集，案例中控件执行结果如下图所示：  
[ ![](/img/aistudio/io/file/workflow-result.png) ](/img/aistudio/io/file/workflow-result.png)
